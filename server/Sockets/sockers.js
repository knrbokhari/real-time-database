// module.exports = (io) => {
//   io.on("connection", (socket) => {
//     socket.on("new-item", (newItem) => {
//       console.log(newItem);
//       db.list.create(newItem).then((data) => {
//         io.emit("emit-task", data);
//       });
//     });

//     // socket.on("remove-item", function (newitem) {
//     //   console.log("------------");
//     //   io.emit("removed-task", newitem);
//     // });

//     // socket.on("edit-item", function (newitem) {
//     //   io.emit("edit-task", newitem);
//     // });

//     // socket.on("edit-text", function (newitem) {
//     //   console.log(newitem);
//     //   io.emit("edited-text", newitem);
//     // });
//   });
// };
