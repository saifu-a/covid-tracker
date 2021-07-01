let database = firebase.database();

let resourcesRef = database.ref("registration");
resourcesRef.on("value", function (snapshot) {
  snapshot.forEach(function (childSnapshot) {
    let childData = childSnapshot.val();

    displayChildData(childData);
  });
});

const resourceElement = document.querySelector(".resources");

function displayChildData(childData) {
  resourceElement.innerHTML += `
    <p>
        ${childData.name} - ${childData.location}: <br>
        <a href=https://${childData.website} target="_blank" >https://${childData.website}</a>
    </p>
    `;

  console.log(childData);
}
