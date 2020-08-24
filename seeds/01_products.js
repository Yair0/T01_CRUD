exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("products").insert([
        {
          id: 1,
          name: "Balón de futbol",
          description: "Un buen equipo",
          price: 200,
        },
        {
          id: 2,
          name: "Balón de futbol 2",
          description: "Un buen equipo",
          price: 300,
        },
        {
          id: 3,
          name: "Balón de futbol 3",
          description: "Un buen equipo",
          price: 400,
        },
      ]);
    });
};
