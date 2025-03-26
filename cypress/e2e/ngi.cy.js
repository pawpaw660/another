beforeEach(function (){
    this.depotStatus = open
})
it("ngiTest",function(){
cy.intercept("GET","**depotsmanagement/api/v1/depots/details?name=NAKURU+EAST",this.depotStatus)
cy.ngiBaseURL()

})