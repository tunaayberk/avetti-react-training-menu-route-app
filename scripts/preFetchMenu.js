const fetch = require("node-fetch");
const fs = require("fs");

const MENU_LINK =
  "https://demob2b2cpreview.avetti.io/preview/uservices/1.0.2/menu/20180521148/category/Shop/lang/en/";

fetch(MENU_LINK)
  .then((res) => res.json())
  .then((json) =>
    JSON.stringify(
      json.childs.map((child) => {
        let name = child.name.replace("&amp;", "&");
        let url = child.URL.replace("shop", "");
        let image = child.image;
        let cid = child.cid;
        return { url, name, image, cid };
      })
    )
  )
  .then(async (data) => {
    await fs.writeFileSync(
      "./src/shared/data/preFetchMenu.json",
      data,
      (err) => {
        if (err) throw err;
        console.log("Menu Fetch Successfully");
      }
    );
  })
  .catch((err) => console.log("ERROR", err));
