const guests = [
    { id: "1", name: "Fam. Zuñiga Hernandez", passes: 2, gender: "mixto" },
    { id: "2", name: "Familia Hernandez Ixmay", passes: 2, gender: "mixto" },
    { id: "3", name: "Sra. Sofia Hernandez", passes: 1, gender: "femenino" },
    { id: "4", name: "Familia Hernandez Lopez", passes: 5, gender: "mixto" },
    { id: "5", name: "Sra. Maria Ulin", passes: 1, gender: "femenino" },
    { id: "6", name: "Sra. Ingrid Cajas", passes: 1, gender: "femenino" },
    { id: "7", name: "Familia Palma Hernandez", passes: 2, gender: "mixto" },
    { id: "8", name: "Sr. Orlando Ulin", passes: 1, gender: "masculino" },
    { id: "9", name: "Familia Alvarizaes Garcia", passes: 4, gender: "mixto" },
    { id: "10", name: "Sra. Dulce Natareno", passes: 1, gender: "femenino" },
    { id: "11", name: "Sra. Greysi López", passes: 1, gender: "femenino" },
    { id: "12", name: "Sra. Maria Vasquez", passes: 1, gender: "femenino" },
    { id: "13", name: "Sra. Evelyn Pérez", passes: 1, gender: "femenino" },
    { id: "14", name: "Familia Pérez Molina", passes: 2, gender: "mixto" },
    { id: "15", name: "Sra. Anaithe Del Valle", passes: 2, gender: "femenino" },
    { id: "16", name: "Sra. Ilda Castillo", passes: 1, gender: "femenino" },
    { id: "17", name: "Sra. Dallana Gómez", passes: 1, gender: "femenino" },
    { id: "18", name: "Sr. Oscar de Leon", passes: 1, gender: "masculino" },
    { id: "19", name: "Licenciados. Lucrecia y Norman Sanchez Sanchez", passes: 2, gender: "mixto" },
    { id: "20", name: "Familia Gordillo", passes: 4, gender: "mixto" },
    { id: "21", name: "Sr. Jordi Aguilar", passes: 1, gender: "masculino" },
    { id: "22", name: "Familia Carranza", passes: 2, gender: "mixto" },
    { id: "23", name: "Sr. Luis Riley", passes: 1, gender: "masculino" },
    { id: "24", name: "Familia Arango Sandoval", passes: 2, gender: "mixto" },
    { id: "25", name: "Sr. Demis Mazariegos", passes: 2, gender: "masculino" },
    { id: "26", name: "Sra. Lidia Pérez", passes: 1, gender: "femenino" },
    { id: "27", name: "Sra. Paola Vasquez", passes: 1, gender: "femenino" },
    { id: "28", name: "Sr. Jonathan Xante", passes: 1, gender: "masculino" },
    { id: "29", name: "Sr. Cristian Cabrera", passes: 1, gender: "masculino" },
    { id: "30", name: "Sr. Rody De La Cruz", passes: 1, gender: "masculino" },
    { id: "31", name: "Sra. Hilda Mendez", passes: 1, gender: "femenino" },
    { id: "32", name: "Sr. Joaquin Hernandez", passes: 1, gender: "masculino" },
    { id: "33", name: "Sra. Dora Ochaeta", passes: 1, gender: "femenino" },
    { id: "34", name: "Sra. Ana Patricia Perez", passes: 2, gender: "femenino" },
    { id: "35", name: "Familia Gramajo Alvarez", passes: 2, gender: "mixto" },
    { id: "36", name: "Sr. Brandon Rodas", passes: 1, gender: "masculino" },
    { id: "37", name: "Familia Olivar Davila", passes: 2, gender: "mixto" },
    { id: "38", name: "Sra. Carmen Morales", passes: 1, gender: "femenino" },
    { id: "39", name: "Licda. Ligia Morales", passes: 1, gender: "femenino" },
    { id: "40", name: "Familia Morales Martinez", passes: 2, gender: "mixto" },
    { id: "41", name: "Sr. Felipe Hernandez", passes: 1, gender: "masculino" },
    { id: "42", name: "Sr. Carlos Castellano", passes: 1, gender: "masculino" },
    { id: "43", name: "Sra. Angie Calderon", passes: 1, gender: "femenino" },
    { id: "44", name: "Sr. Marlon Giron", passes: 1, gender: "masculino" },
    { id: "45", name: "Sra. Valentina Dávila", passes: 1, gender: "femenino" },
    { id: "46", name: "Familia Ulin Duarte", passes: 2, gender: "mixto" },
    { id: "47", name: "Familia Lopez Ulin", passes: 2, gender: "mixto" },
    { id: "48", name: "Familia Quijivir Diaz", passes: 2, gender: "mixto" },
    { id: "49", name: "Sr. Sergio Maldonado", passes: 1, gender: "masculino" },
    { id: "50", name: "Sr. Carlos Hip", passes: 2, gender: "masculino" },
    { id: "51", name: "Familia Rivera Alvarado", passes: 2, gender: "mixto" },
    { id: "52", name: "Familia Hernandez Guzman", passes: 2, gender: "mixto" },
    { id: "53", name: "Sr. Marco Mazariegos", passes: 1, gender: "masculino" },
    { id: "54", name: "Sr. Nehemias Aguilar", passes: 1, gender: "masculino" },
    { id: "55", name: "Familia Batres Gabrielle", passes: 2, gender: "mixto" },
    { id: "56", name: "Sr. Roby Maldonado", passes: 1, gender: "masculino" },
    { id: "57", name: "Sra. Luisa Morales", passes: 1, gender: "femenino" },
    { id: "58", name: "Familia Cano Campano", passes: 2, gender: "mixto" },
    { id: "59", name: "Familia Lopez Gutiérrez", passes: 2, gender: "mixto" },
    { id: "60", name: "Sr. Cristian Zarate", passes: 1, gender: "masculino" },
    { id: "61", name: "Sr. Isaac Osorio", passes: 1, gender: "masculino" },
    { id: "62", name: "Familia Giron Werner", passes: 2, gender: "mixto" },
    { id: "63", name: "Sr. Roberto Giron", passes: 1, gender: "masculino" },
    { id: "64", name: "Sr. Dedniz Fitzgerald", passes: 3, gender: "masculino" },
    { id: "65", name: "Sr. Crissi Nufio", passes: 1, gender: "masculino" },
    { id: "66", name: "Sr. Bryan Saenz", passes: 1, gender: "masculino" },
    { id: "67", name: "Familia Cifuentes", passes: 2, gender: "mixto" },
    { id: "68", name: "Familia Ibañez", passes: 2, gender: "mixto" },
    { id: "69", name: "Sr. Fernando Ibañez", passes: 1, gender: "masculino" },
    { id: "70", name: "Sr. Samuel Coloch", passes: 1, gender: "masculino" },
    { id: "71", name: "Sr. Levin Cordon", passes: 2, gender: "masculino" },
    { id: "72", name: "Sres. Daneil Davila y Sarita Davila", passes: 2, gender: "mixto" },
    { id: "73", name: "Sr. Eduardo Yagut", passes: 1, gender: "masculino" },
    { id: "74", name: "Sr. Saul Cuellar", passes: 1, gender: "masculino" },
    { id: "75", name: "Esposos Ixmay", passes: 2, gender: "mixto" },
    { id: "76", name: "Familia de Leon", passes: 2, gender: "mixto" },
    { id: "77", name: "Sr. Santiago Ixmay", passes: 1, gender: "masculino" },
    { id: "78", name: "Sr. Sergio Azu", passes: 1, gender: "masculino" },
    { id: "79", name: "Sr. Jonathan Munguia", passes: 1, gender: "masculino" },
    { id: "80", name: "Julio Hernández", passes: 1, gender: "masculino" },
    { id: "81", name: "Marianita chaclan", passes: 1, gender: "femenino" }
  ];  

  document.addEventListener("DOMContentLoaded", function () {
    function getQueryParams() {
      const params = {};
      const queryString = window.location.search.substring(1);
      if (!queryString) return params;
  
      const pairs = queryString.split("&");
      for (const pair of pairs) {
        const [key, value] = pair.split("=");
        params[decodeURIComponent(key)] = decodeURIComponent((value || "").replace(/\+/g, " "));
      }
      return params;
    }
  
    const queryParams = getQueryParams();
    const guestId = queryParams.id;
  
    const guest = guests.find(g => g.id === guestId);
  
    if (guest) {
      // 👇 DISPONIBLE PARA script.js (WhatsApp, etc.)
      window.currentGuest = guest;
  
      let invitText = "";
  
      if (guest.passes === 1) {
        invitText = guest.gender === "femenino"
          ? `¡${guest.name}, está invitada!`
          : `¡${guest.name}, está invitado!`;
      } else {
        if (guest.gender === "femenino") {
          invitText = `¡${guest.name}, están invitadas!`;
        } else {
          invitText = `¡${guest.name}, están invitados!`;
        }
      }
  
      const guestNameEl = document.getElementById("guest-name");
      const passesEl = document.getElementById("passes");
  
      if (guestNameEl) guestNameEl.textContent = invitText;
      if (passesEl) passesEl.textContent = `${guest.passes} ${guest.passes === 1 ? "pase" : "pases"}`;
    } else {
      window.currentGuest = null;
  
      const guestNameEl = document.getElementById("guest-name");
      if (guestNameEl) guestNameEl.textContent = "¡Invitado no encontrado!";
  
      const section = document.querySelector(".invitation-info-section");
      if (section) section.style.display = "none";
    }
  });
  