require('dotenv').config()
const SibApiV3Sdk = require('sib-api-v3-sdk');
let defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.API_KEY;

let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

sendSmtpEmail.subject = "Send In Blue Automated Email";
sendSmtpEmail.htmlContent = "<html><body><h1>This is my first transactional email {{params.parameter}}</h1></body></html>";
sendSmtpEmail.sender = {"name":"Bishal Goon","email":"bishal.unicoglobal@gmail.com"};
sendSmtpEmail.to = [{"email":"bishal9goon@gmail.com","name":"Jane Doe"}];
sendSmtpEmail.cc = [{"email":"bishal9goon@gmail.com","name":"Janice Doe"}];
sendSmtpEmail.bcc = [{"email":"John Doe","name":"example@example.com"}];
sendSmtpEmail.replyTo = {"email":"bishal.unicoglobal@gmail.com","name":"Bishal Goon"};
sendSmtpEmail.headers = {"Some-Custom-Name":"unique-id-1234"};
sendSmtpEmail.params = {"parameter":"My param value","subject":"New Subject"};

apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, function(error) {
  console.error(error);
});