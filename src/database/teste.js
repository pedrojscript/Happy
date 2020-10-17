const database = require("./db");
const saveOrphanage = require('./saveOrphanage')

database.then(async (db) => {
  // inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-15.5963564",
    lng: "-56.1235773",
		name: "Local QIUYEQWBEQBW",
		about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
		whatsapp: "65979897979",
    images: [
      "https://images.unsplash.com/photo-1600711724779-c039d7410ceb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1563465814437-b1a057a461ed?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas das 8h as 18h",
    open_on_weekends: "0",

  })
  // consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");

	
	// consutar somente 1 orphanato, pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"');
	console.log(orphanage);
	
	// deletar dado da tabela
	console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
	console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
	
});
