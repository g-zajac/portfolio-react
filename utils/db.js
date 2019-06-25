const spicedPg = require("spiced-pg");

var dbURL =
    process.env.DATABASE_URL ||
    "postgres:postgres:postgres@localhost:5432/portfolio";
var db = spicedPg(dbURL);

module.exports = {
    getSmtCharData
};

function getSmtCharData() {
    return db.query(
        `
        SELECT
          date_trunc('day', created_at) AS summary,
          count(1)
        FROM smt_visits
        GROUP BY 1
        ORDER BY summary ASC
        LIMIT 10
    `
    );
}
