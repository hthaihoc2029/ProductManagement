module.exports = (query) => {
  let filterStatus = [
    {
      name: "Tất cả",
      status: "",
      class: !query.status ? "active" : "",
    },
    {
      name: "Hoạt động",
      status: "active",
      class: query.status == "active" ? "active" : "",
    },
    {
      name: "Dừng hoạt động",
      status: "inactive",
      class: query.status == "inactive" ? "active" : "",
    },
  ];

  return filterStatus;
};
