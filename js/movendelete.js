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
alert("disc targetUrl: "+targetUrl);
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
alert("discussionSplitValue[i]: "+discussionSplitValue[i]);
if(discussionSplitValue[i] != '')
getContent(templateSpace,target_groupurl);
}
}

if(fileSplitValue.length > 1) {
var str='';
var str2='';
targetUrl = target_groupurl;
alert("file targetUrl: "+targetUrl);
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
alert("fileSplitValue[i]: "+fileSplitValue[i]);
if(fileSplitValue[i] != '')
getContent(templateSpace,target_groupurl);
}
}

if(documetSplitValue.length > 1) {
var str='';
var str2='';
targetUrl = target_groupurl;
alert("doc targetUrl: "+targetUrl);
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
alert("documetSplitValue[i]: "+documetSplitValue[i]);
if(documetSplitValue[i] != '')
getContent(templateSpace,target_groupurl);
}
}

if(pollSplitValue.length > 1) {
var str='';
var str2='';
targetUrl = target_groupurl;
alert("poll targetUrl: "+targetUrl);
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
alert("pollSplitValue[i]: "+pollSplitValue[i]);
if(pollSplitValue[i] != '')
getContent(templateSpace,target_groupurl);
}
}

if(ideaSplitValue.length > 1) {
var str='';
var str2='';
targetUrl = target_groupurl;
alert("idea targetUrl: "+targetUrl);
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
alert("ideaSplitValue[i]: "+ideaSplitValue[i]);
if(ideaSplitValue[i] != '')
getContent(templateSpace);
}
}

if(blogSplitValue.length > 1) {
var str='';
var str2='';
targetUrl=to_place_blog_url1;
alert("blog targetUrl: "+targetUrl);
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
alert("blogSplitValue[i]: "+blogSplitValue[i]);
if(blogSplitValue[i] != '')
getContent(templateSpace,to_place_blog_url1);
}
}
}

function getContent(source,target_groupurl) {
alert("Get Content ::"+target_groupurl);
osapi.jive.corev3.contents.get({
fields: '@all',
count  :50,
uri: source
}).execute(onContentFetch,target_groupurl);
}

function onContentFetch(response,target_groupurl) {
if (response.error) {
mini.createTimerMessage("<div style='text-align:center;'>Unable to fetch discussions: " + response.error.message + "</div>", 4);
return;
}


//console.log("json "+JSON.stringify(response));
alert("json "+JSON.stringify(response));
var postDisc;

if(globalAction == 'move'){
//response.parent=targetUrl;
response.parent=target_groupurl;
alert("move targetUrl: "+target_groupurl);
//response.update().execute();
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