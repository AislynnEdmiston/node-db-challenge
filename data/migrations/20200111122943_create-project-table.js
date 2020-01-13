
exports.up = function(knex) {
    return knex.schema.createTable('project', tbl => {
        tbl.increments();
        tbl.text('project name', 128)
            .unique()
            .notNullable();
        tbl.text('project description', 160);
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(false);
    });
};

exports.down = function(knex) {
    return knex.dropTableIfExists('project');
};
