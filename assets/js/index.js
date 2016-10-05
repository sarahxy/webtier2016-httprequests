$(document).ready(function() {
  // YOUR CODE GOES HERE

  /* Sample Callback Function */
  /*
  var callback = function(err, res) {
  	if (err) {
  		console.log(err);
  	} else {
  		console.log(res.body);
  	}
  }
  */

  // Enter in RGB values to generate a color
  var submit1 = $("#button1");

  submit1.click(function () {
    var ared = $("#red").val();
    var agreen = $("#green").val();
    var ablue = $("#blue").val();
    
    /*
    $('#change_me').css({
      'background-color': 'rgb(' + ared + ', ' + agreen + ', ' + ablue + ')'
    });
    */

    superagent.get('http://webtier2016.christianle.com/v1/color')
      .query({
        red: ared,
        green: agreen,
        blue: ablue,
      })
      .end(function(err, res) {
        if (err) {
          console.log(err);
        } else {
          console.log("The RGB values respectively are: " + res.body.red + ', ' + res.body.green + ', ' + res.body.blue);
          $('#change_me').css({
            'background-color': 'rgb(' + res.body.red + ', ' + res.body.green + ', ' + res.body.blue + ')'
          });
        }
      });
      
  });

  // Random color generator
  superagent.get('http://webtier2016.christianle.com/v1/color')
  	.end(function(err, res) {
  		if (err) {
  			console.log(err);
  		} else {
  			var color = res.body.hex;
  			console.log(color);
  			$('#random').css({
          'background-color': color,
        }).text(res.body.hex);
  		}
  	});

  // Submit a form!
  var submit2 = $("#button2");

  submit2.click(function () {
    var aname = $("#name").val();
    var aemail = $("#email").val();
    var amessage = $("#message").val();

    superagent.post('http://webtier2016.christianle.com/v1/contact')
      .send({
        name: aname,
        email: aemail,
        message: amessage
      })
      .end(function(err, res) {
        if (err) {
          console.log(err);
        } else {
          var response = res.body;
          console.log(response);
          $('#response').text(response.message);
        }
      });      
    });

  
});

