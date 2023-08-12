import {
    Given
} from "@badeball/cypress-cucumber-preprocessor";

Given("Points Table", () => {
    cy.visit("https://www.cricbuzz.com/cricket-stats/icc-rankings/men/batting");
    let arr = []
    let playerName;
    cy.get("div.cb-rank-tbl.pull-right").each((el, index) => {
        if (index < 10) {
            cy.log(el.text());
            arr.push(parseInt(el.text().trim()))
        }
        let sortedArr = arr.sort((a, b) => b - a);
        if (el.text() == sortedArr[0]) {
            cy.get('div.cb-rank-plyr > a').eq(index).then((el) => {
                playerName = (el.text())
                cy.wrap(el).click()

            }).then(() => {
                cy.get('h1[itemprop="name"]').should('contain', playerName)
            })
        }

    })






})