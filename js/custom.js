var validateEmail = function (email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}; 

/* Email Stuff */
$(document).ready(function () {
  var email = $("#form-email");
  var hint = $(".email-stuff");

  hint.css('display', 'none');

  email.on('blur', function () {
    hint.css('display', 'none');
    hint.html("");
    $(this).mailcheck({
      suggested: function (element, suggestion) {
        if ( ! hint.html()) {
           // First error - fill in/show entire hint element
           var suggestion = "Did you mean <span class='email-suggestion'>" +
                          "<span class='email-address'>" + suggestion.address + "</span>"
                          + "@<a href='#' class='email-domain'>" + suggestion.domain + 
                          "</a></span>?";
            hint.html(suggestion).fadeIn(150);
        } else {
          // Subsequent errors
          $(".email-address").html(suggestion.address);
          $(".email-domain").html(suggestion.domain);
          hint.fadeIn(150);
        }
      }
    });
  });

  // Filling in that email hint.
  hint.on('click', '.email-domain', function() {
  // On click, fill in the field with the suggestion and remove the hint
  email.val($(".email-suggestion").text());
  hint.fadeOut(200, function() {
    $(this).empty();
  });
  return false;
  });
});
  /* Sending Email via Mandrill */
$('#send-message-btn').click(function(e) {
  var button = $(this);
  e.preventDefault();
  var name = $('#form-name').val();
  var email = $('#form-email').val();
  var service = $('#form-service option:selected').text();
  var message = $('#form-message').val();

  // hint for email validation
  var hint = $('.email-stuff');
  var suggestion = "<span style='color: red'>This email address is not valid.</span>"
  var isEmailValidated = validateEmail(email);

  if ( ! isEmailValidated) {
    hint.html(suggestion);
    hint.fadeIn(150);
  } else {
    console.log(name, email, service, message);
    button.button('loading');
    // Send an email via Mandrill
    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        'key': 'jy--nFFvJK3oqNjIMtc0cw',
        'message': {
          'from_email': email,
          'to': [{
            'email': 'hi@derick.is',
            'name': 'Derick Ruiz',
            'type': 'to'
        }],
        'autotext': 'true',
        'subject': 'A new message by ' + name + ' from derick.is',
        'html': 'Name: ' + name + '<br>' + 'Email: ' + email + '<br>' + 'Service: ' + service + '<br>' + 'Message: ' + '<br>' + message
    }
  }
 }).done(function(response) {
  console.log(response);
  console.log(response['0']);
  console.log(response['0'].status);
  if(response['0'].status === "sent") {
    vex.defaultOptions.className = 'vex-theme-default';
    vex.open({
      content: '<div style="background-color: #e3ca45"><img class= "modal-image" src="img/icons/tile-large.png"><p style="padding-left: 20px; padding-right: 20px; padding-bottom: 20px; color: #000; text-align: center; font-family: '+ 'Source Sans Pro' +', sans-serif;">Thank you, your message was <strong>sent successfully</strong>. Expect a response within 24 hours.</p></div>'
    });
    button.button('reset');
    name = $('#form-name').val("");
    email = $('#form-email').val("");
    message = $('#form-message').val("");
  } else {
    alert("I'm sorry, but it looks like my email service is down (this is extremely rare). Please email me directly at hi@derick.is or call +1 901 341 9614.");
    button.button('reset');
  }
 });
}
});

/* smooth scrolling */
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Load is used to ensure all images have been loaded, impossible with document

jQuery( window ).load( function() {



    // Takes the gutter width from the bottom margin of .post

  var gutter = parseInt( jQuery( '.post' ).css( 'marginBottom' ) );
  var container = jQuery( '#posts' );



  // Creates an instance of Masonry on #posts

  container.masonry({
    gutter: gutter,
    itemSelector: '.post',
    columnWidth: '.post'
  });
  
  
  
  // This code fires every time a user resizes the screen and only affects .post elements
  // whose parent class is .container-fluid. Triggers resize so nothing looks weird.
  
  jQuery( window ).bind( 'resize', function(){
    if ( jQuery( '#posts' ).parent().hasClass( 'container-fluid' ) ) {
      
      
      
      // Resets all widths to 'auto' to sterilize calculations
      
      post_width = jQuery( '.post' ).width() + gutter;
      jQuery( '.container-fluid #posts, body > .container-fluid' ).css( 'width', 'auto');
      
      
      
      // Calculates how many .post elements will actually fit per row. Could this code be cleaner?
      
      posts_per_row = jQuery( '#posts' ).innerWidth() / post_width;
      floor_posts_width = ( Math.floor( posts_per_row ) * post_width ) - gutter;
      ceil_posts_width = ( Math.ceil( posts_per_row ) * post_width ) - gutter;
      posts_width = ( ceil_posts_width > jQuery( '#posts' ).innerWidth() ) ? floor_posts_width : ceil_posts_width;
      if ( posts_width == jQuery( '.post' ).width() ) posts_width = '100%';
      
      
      
      // Ensures that all top-level .container-fluid elements have equal width and stay centered
      
      jQuery( '.container-fluid #posts, body > .container-fluid' ).css( 'width', posts_width );
      jQuery( 'body > .container-fluid' ).css({ 'margin': '0 auto' });
    
    
    
    }
  }).trigger( 'resize' );
  


});