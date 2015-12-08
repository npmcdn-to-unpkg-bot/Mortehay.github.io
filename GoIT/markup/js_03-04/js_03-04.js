document.body.style.backgroundColor="grey";
var WraperDiv=document.createElement('div');
WraperDiv.className="WraperDiv";
WraperDiv.style.width="600px";
WraperDiv.style.height="600px";
WraperDiv.style.margin="50px auto 50px auto";
WraperDiv.style.backgroundColor="#ffffff";
WraperDiv.style.border="1px solid #000000";
document.body.appendChild(WraperDiv);
var H3text = document.createElement('h3');
H3text.className = "H3Text";
H3text.innerHTML = "Тест по программированию";
H3text.style.width="250px";
H3text.style.marginTop="50px";
H3text.style.marginLeft="auto";
H3text.style.marginRight="auto";
WraperDiv.appendChild(H3text);
var question={
	set0: ['<p>Вопрос №1</p>', '<p>Вопрос №2</p>', '<p>Вопрос №3</p>'],
	set1: ['<p>Вопрос №1</p>', '<p>Вопрос №2</p>', '<p>Вопрос №3</p>', '<p>Вопрос №4</p>']
};
var option={
	set0: ['<p>Вариант ответа №1</p>', '<p>Вариант ответа №2</p>', '<p>Вариант ответа №3</p>'],
	set1: ['<p>Вариант ответа №1</p>', '<p>Вариант ответа №2</p>', '<p>Вариант ответа №3</p>', '<p>Вариант ответа №4</p>']
};
function MakeLists (array1, array2) {
	var OuterList=document.createElement('ol');
	OuterList.style.width="250px";
	OuterList.style.marginTop="50px";
	OuterList.style.marginLeft="10px";
	/*OuterList.style.marginRight="auto";*/
	for (var i = 0; i < array1.length; i++) {
		var OuterItem=document.createElement('li');
		OuterItem.innerHTML=array1[i];
		OuterList.appendChild(OuterItem);
		OuterItem.style.marginBottom="15px";		
		var InnerList=document.createElement('ul');
		InnerList.style.marginTop="15px";
		for (var j = 0; j < array2.length; j++) {
			var InnerItem=document.createElement('li');
			InnerItem.innerHTML=array2[j];
			InnerList.appendChild(InnerItem);
			InnerList.style.listStyleType="none";
			var CheckboxUl = document.createElement("INPUT");
			CheckboxUl.setAttribute("type", "checkbox");
			CheckboxUl.className="regular-checkbox";
			InnerList.insertBefore(CheckboxUl, InnerItem);
			/*CheckboxUl.style.margin="0";*/
			InnerItem.style.display="block";
			InnerItem.style.marginLeft="10px";
			CheckboxUl.style.cssFloat="left";
			
			/*CheckboxUl.style.border="1px solid #444b7e";*/
		}
		OuterItem.appendChild(InnerList);

	};
	WraperDiv.appendChild(OuterList);
}
MakeLists(question.set0, option.set0);
var CheckButton = document.createElement("INPUT");
CheckButton.setAttribute("type", "button");
CheckButton.value="Проверить мои результаты";
CheckButton.style.display="box";
CheckButton.style.padding="5px 30px 5px 30px";
CheckButton.style.backgroundColor="#98dafb";
CheckButton.style.borderColor="#444b7e";
CheckButton.style.margin="30px auto 30px 30%";
WraperDiv.appendChild(CheckButton);
