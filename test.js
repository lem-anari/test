
let linkCat,
    linkDog,
    linkFox;
if(links.hasChildNodes()){
  linkCat = links.children[2].children[0].textContent;
  linkDog = links.children[2].children[1].children[0].children[0].textContent;
  linkFox = links.children[2].children[2].children[0].textContent;
}
          
describe("link", function() {

  it("check links", function() {
    assert.equal(link("https:\/\/purr.objects-us-east-1.dream.io\/i\/img_20160924_170252.jpg"), linkCat);
  });
  it("check links", function() {
    assert.equal(link("https://random.dog/ae283a08-4762-48d7-b283-3020bbef2268.JPG"), linkDog);
  });
  it("check links", function() {
    assert.equal(link("https:\/\/randomfox.ca\/\/images\/\/75.jpg"), linkFox);
  });

});