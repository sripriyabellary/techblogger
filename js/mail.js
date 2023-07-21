function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      number: document.getElementById("num").value,
      subject: document.getElementById("sub").value,
      message: document.getElementById("message").value,
    };
      
        const serviceID = "service_l1cvos2";
        const templateID = "emplate_nfg2mv9";
      
          emailjs.send(serviceID, templateID, params)
          .then(res=>{
              document.getElementById("name").value = "";
              document.getElementById("email").value = "";
              document.getElementById("num").value = "";
              document.getElementById("sub").value = "";
              document.getElementById("message").value = "";
              console.log(res);
              alert("Your message sent successfully!!")
      
          })
          .catch(err=>console.log(err));
      
      }
      