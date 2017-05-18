app.factory('chatService',function($rootScope){
	var socket = new SockJS('/projectbackend/portfolio');
    var stompClient = Stomp.over(socket);
    stompClient.connect("chakri", "1234", function(frame) {
      $rootScope.$broadcast('sockConnected', frame);
    });

    return {
      stompClient: stompClient
    };
});