var globalAction;
var targetUrl;
var dest_space_name;
var redirection_url;
var source_html_url;
var src_space_name;
var to_place_blog_url;

function movendelete(action,srcgroup_place_url,target_groupurl,Grp_file_json,Grp_doc_json,Grp_disc_json,Grp_idea_json,Grp_poll_json,Grp_blog_json,dest_space_name1,redirection_url1,source_html_url1,src_space_name1,to_place_blog_url1) {
globalAction = action;

dest_space_name=dest_space_name1;
redirection_url=redirection_url1;
source_html_url=source_html_url1;
src_space_name=src_space_name1;


var	discussionSplitValue = Grp_disc_json.split(";");
var fileSplitValue = Grp_file_json.split(";");			
var documetSplitValue = Grp_doc_json.split(";");
var blogSplitValue = Grp_blog_json.split(";");
var ideaSplitValue = Grp_idea_json.split(";");
var pollSplitValue = Grp_poll_json.split(";");

alert("disc"+discussionSplitValue.length);
alert("file"+fileSplitValue.length);
alert("doc"+documetSplitValue.length);
alert("blog"+blogSplitValue.length);
alert("idea"+ideaSplitValue.length);
alert("poll"+pollSplitValue.length);

var templateSpace;
$("#start_copying_button").hide();
$("#change_contents").hide();
$("#button_div").hide();
var iframe = '<iframe id="frame1" src = "" style="width:650px;height:90px;margin-top:0px;font-family:Tahoma"></iframe>';
document.getElementById("selected_items").innerHTML=iframe;  
$("#copyTo").text("Moving this:");

if(discussionSplitValue.length > 1) {
var str='';
var str2='';
targetUrl = target_groupurl;
if(globalAction == 'move')
{
str='Moving ';
str2='Moving discussions';
}
if(globalAction == 'delete')
{
str='Deleting ';
str2='Deleting discussions';
}
for (var i = 0; i < discussionSplitValue.length; i++) {
document.getElementById("frame1").contentDocument.body.style.fontFamily="Tahoma";	
document.getElementById("frame1").contentDocument.body.style.fontSize = "12px";
document.getElementById("frame1").contentDocument.body.style.color='Grey';
document.getElementById("frame1").contentDocument.body.innerHTML = str+"in Progress.<br>Please leave this window open until the "+str+"process has been completed.<br><br><span id='mySpan' style='font-weight:bold;'>"+str2.fontcolor("#3778C7")+"</span>";
templateSpace = discussionSplitValue[i];
if(discussionSplitValue[i] != '')
getContent(templateSpace);
}
}

if(fileSplitValue.length > 1) {
var str='';
var str2='';
targetUrl = target_groupurl;
if(globalAction == 'move')
{
str='Moving ';
str2='Moving files';
}
if(globalAction == 'delete')
{
str='Deleting ';
str2='Deleting files';
}

for (var i = 0; i < fileSplitValue.length; i++) {
document.getElementById("frame1").contentDocument.body.style.fontFamily="Tahoma";	
document.getElementById("frame1").contentDocument.body.style.fontSize = "12px";
document.getElementById("frame1").contentDocument.body.style.color='Grey';
document.getElementById("frame1").contentDocument.body.innerHTML = str+"in Progress.<br>Please leave this window open until the "+str+"process has been completed.<br><br><span id='mySpan' style='font-weight:bold;'>"+str2.fontcolor("#3778C7")+"</span>";
templateSpace = fileSplitValue[i];
if(fileSplitValue[i] != '')
getContent(templateSpace);
}
}

if(documetSplitValue.length > 1) {
var str='';
var str2='';
targetUrl = target_groupurl;
if(globalAction == 'move')
{
str='Moving ';
str2='Moving documents';
}
if(globalAction == 'delete')
{
str='Deleting ';
str2='Deleting documents';
}

for (var i = 0; i < documetSplitValue.length; i++) {
document.getElementById("frame1").contentDocument.body.style.fontFamily="Tahoma";	
document.getElementById("frame1").contentDocument.body.style.fontSize = "12px";
document.getElementById("frame1").contentDocument.body.style.color='Grey';
document.getElementById("frame1").contentDocument.body.innerHTML = str+"in Progress.<br>Please leave this window open until the "+str+"process has been completed.<br><br><span id='mySpan' style='font-weight:bold;'>"+str2.fontcolor("#3778C7")+"</span>";

templateSpace = documetSplitValue[i];
if(documetSplitValue[i] != '')
getContent(templateSpace);
}
}

if(pollSplitValue.length > 1) {
var str='';
var str2='';
targetUrl = target_groupurl;
if(globalAction == 'move')
{
str='Moving ';
str2='Moving polls';
}
if(globalAction == 'delete')
{
str='Deleting ';
str2='Deleting polls';
}

for (var i = 0; i < pollSplitValue.length; i++) {
document.getElementById("frame1").contentDocument.body.style.fontFamily="Tahoma";	
document.getElementById("frame1").contentDocument.body.style.fontSize = "12px";
document.getElementById("frame1").contentDocument.body.style.color='Grey';
document.getElementById("frame1").contentDocument.body.innerHTML = str+"in Progress.<br>Please leave this window open until the "+str+"process has been completed.<br><br><span id='mySpan' style='font-weight:bold;'>"+str2.fontcolor("#3778C7")+"</span>";

templateSpace = pollSplitValue[i];
if(pollSplitValue[i] != '')
getContent(templateSpace);
}
}

if(ideaSplitValue.length > 1) {
var str='';
var str2='';
targetUrl = target_groupurl;
if(globalAction == 'move')
{
str='Moving ';
str2='Moving ideas';
}
if(globalAction == 'delete')
{
str='Deleting ';
str2='Deleting ideas';
}

for (var i = 0; i < ideaSplitValue.length; i++) {
document.getElementById("frame1").contentDocument.body.style.fontFamily="Tahoma";	
document.getElementById("frame1").contentDocument.body.style.fontSize = "12px";
document.getElementById("frame1").contentDocument.body.style.color='Grey';
document.getElementById("frame1").contentDocument.body.innerHTML = str+"in Progress.<br>Please leave this window open until the "+str+"process has been completed.<br><br><span id='mySpan' style='font-weight:bold;'>"+str2.fontcolor("#3778C7")+"</span>";	

templateSpace = ideaSplitValue[i];
if(ideaSplitValue[i] != '')
getContent(templateSpace);
}
}

if(blogSplitValue.length > 1) {
var str='';
var str2='';
targetUrl=to_place_blog_url1;
if(globalAction == 'move')
{
str='Moving ';
str2='Moving blogs';
}
if(globalAction == 'delete')
{
str='Deleting ';
str2='Deleting blogs';
}

for (var i = 0; i < blogSplitValue.length; i++) {
document.getElementById("frame1").contentDocument.body.style.fontFamily="Tahoma";	
document.getElementById("frame1").contentDocument.body.style.fontSize = "12px";
document.getElementById("frame1").contentDocument.body.style.color='Grey';
document.getElementById("frame1").contentDocument.body.innerHTML = str+"in Progress.<br>Please leave this window open until the "+str+"process has been completed.<br><br><span id='mySpan' style='font-weight:bold;'>"+str2.fontcolor("#3778C7")+"</span>";	

templateSpace = blogSplitValue[i];
if(blogSplitValue[i] != '')
getContent(templateSpace);
}
}
}

function getContent(source) {
osapi.jive.corev3.contents.get({
fields: '@all',
count  :50,
uri: source
}).execute(onContentFetch);
}

function onContentFetch(response) {
if (response.error) {
mini.createTimerMessage("<div style='text-align:center;'>Unable to fetch discussions: " + response.error.message + "</div>", 4);
return;
}

console.log("json "+JSON.stringify(response));
var postDisc;

if(globalAction == 'move'){
response.parent=targetUrl;
response.update().execute();
var str='Moving completed. You will now be redirected to "'+dest_space_name+'"';
document.getElementById("frame1").contentDocument.body.innerHTML = "Moving in Progress.<br>Please leave this window open until the moving process has been completed.<br><br><span id='mySpan' style='font-weight:bold;'>"+str.fontcolor("#3778C7")+"</span>";
$("#stylized").fadeOut(5000,function(){
window.location = redirection_url+'/content';         

});

}
else if (globalAction == 'delete'){
response.destroy().execute();
var str='Deleting completed. You will now be redirected to "'+src_space_name+'"';
document.getElementById("frame1").contentDocument.body.innerHTML = "Deleting in Progress.<br>Please leave this window open until the deleting process has been completed.<br><br><span id='mySpan' style='font-weight:bold;'>"+str.fontcolor("#3778C7")+"</span>";
$("#stylized").fadeOut(5000,function(){
window.location = source_html_url+'/content';
});
}

}