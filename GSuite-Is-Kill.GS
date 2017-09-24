function myFunction() 
{
 
  var threads = GmailApp.getInboxThreads(100, 10);
  for (var i = 0; i < threads.length; i++) 
  {
    var message = threads[i].getMessages()[0];
    message.moveToTrash(); // move message to trash
  }
  
        var chatsBulk = GmailApp.search('in:chats',0,100);
  for (var i = 0; i < chatsBulk.length; i++) 
  {
    var message2 = chatsBulk[i].getMessages()[0];
    message2.moveToTrash(); // move message to trash
  }
  
       var chatsLeftovers = GmailApp.search('in:chats',0,1);
  for (var i = 0; i < chatsLeftovers.length; i++) 
  {
    var message3 = chatsLeftovers[i].getMessages()[0];
    message3.moveToTrash(); // move message to trash
  }
 
}
