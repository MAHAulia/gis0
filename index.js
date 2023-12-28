// Baca data dengan fetch
const dataGeoJson = await fetch("./data.json").then((response) =>
  response.json()
);

// Generate Body Child
const tbody = document.getElementById("table-body");

tbody.innerHTML = "";

dataGeoJson.features.forEach((rowData, key) => {
  const row = document.createElement("tr");

  const no = document.createElement("td");
  no.textContent = key + 1;
  row.appendChild(no);

  const nama = document.createElement("td");
  nama.textContent = rowData.propertie.name;
  row.appendChild(nama);

  const type = document.createElement("td");
  type.textContent = rowData.geometry.type;
  row.appendChild(type);

  const coord = document.createElement("td");
  coord.textContent = JSON.stringify(rowData.geometry);
  row.appendChild(coord);

  tbody.appendChild(row);
});
