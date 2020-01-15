
exports.up = function(knex) {
    return knex.schema.createTable('resource', tbl => {
        tbl.increments();
        tbl.text('resource name', 128)
            .notNullable();
        tbl.text('resource description', 160);
    });
};

exports.down = function(knex) {
    return knex.dropTableIfExists('resource');
};
