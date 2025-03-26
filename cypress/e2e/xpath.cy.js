import {furniture} from "../support/selecting"
describe("word",()=>{
   it("visit",()=>{
    cy.baseURL();
    cy.xpath('//div[@class="_3sdu8W emupdz"]//div[@aria-label="Home & Furniture"]//div[@class="YBLJE4"]//span[contains(text(),"Home & Furniture")]').trigger("mouseover")
    furniture('//div[@class="_16rZTH"]//object//a[text()="Furniture"]');
    //adding a comment
 }) 
})