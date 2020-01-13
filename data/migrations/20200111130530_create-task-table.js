
exports.up = function(knex) {
    return knex.schema.createTable('task', tbl => {
        tbl.increments();
        tbl.text('task description', 160)
            .notNullable();
        tbl.text('notes', 160);
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(false);
    });
};

exports.down = function(knex) {
    return knex.dropTableIfExists('task');
};
