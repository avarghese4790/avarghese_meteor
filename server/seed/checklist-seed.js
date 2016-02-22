/** 
Checklist.remove({});
if(Checklist.find({}).count() === 0){
 Checklist.insert({
 	task:"test task1",
 	date: new Date(),
 	completed: false
 });
 Checklist.insert({
 	task:"test task2",
 	date: new Date(),
 	completed: false
 });
  Checklist.insert({
 	task:"test task4",
 	date: new Date(),
 	completed: true
 });
   Checklist.insert({
 	task:"test task3",
 	date: new Date(),
 	completed: true
 });
}
**/