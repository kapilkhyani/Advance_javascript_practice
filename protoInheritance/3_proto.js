let callable_3proto = () => {
  let human = {
    moratl: true,
    runspeed: 50
  }

  let socretes = Object.create(human);
  socretes.runspeed = 100;
  console.log(socretes); // console only itself properties 

  console.log(socretes.moratl);
  console.log(socretes.runspeed);
}
module.exports = {
  callable_3proto
}