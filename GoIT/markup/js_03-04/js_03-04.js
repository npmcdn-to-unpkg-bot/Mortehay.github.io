
var questionsAmount={
	set0: ['Вопрос №1', 'Вопрос №2', 'Вопрос №3'],
	set1: ['Вопрос №1', 'Вопрос №2', 'Вопрос №3', 'Вопрос №4']
};
var answersAmount={
	set0: ['<p>Вариант ответа №1</p>', '<p>Вариант ответа №2</p>', '<p>Вариант ответа №3</p>'],
	set1: ['<p>Вариант ответа №1</p>', '<p>Вариант ответа №2</p>', '<p>Вариант ответа №3</p>', '<p>Вариант ответа №4</p>']
};
var app = {

	createElement: function(params) {
	    var element = document.createElement(params.tagName);

	    if (params.inputType){
	      element.setAttribute('type', params.inputType);
	    }

	    if (params.className){
	      element.className = params.className;
	    }

	    if (params.content){
	      element.innerHTML = params.content;
	    }

	    if (params.parentElement){
	      params.parentElement.appendChild(element);
	    }
	       
	    return element;
	  },

	generateQuestions: function(questionsAmount, answersAmount) {

	    for (var i = 0; i < questionsAmount.length; i++) {
	      this.createElement({
	        tagName: 'h2',
	        content: questionsAmount[i],
	        parentElement: form
	      });

	      for (var j = 0; j < answersAmount.length; j++) {
	        var label = this.createElement({
	          tagName: 'label',
	          content: answersAmount[j],
	          parentElement: form,
	          styleDisplay: 'inline-block'
	        });

	        var checkbox = this.createElement({
	          tagName: 'input',
	          inputType: 'checkbox'
	        });

	        label.insertAdjacentElement('afterBegin', checkbox);
	      }
	    };
	  }

	
}
var body = document.querySelector('body');

app.createElement({
  tagName: 'div',
  parentElement: body,
  className : "wraperDiv"
});
var wraperDiv =document.querySelector('div')

app.createElement({
  tagName: 'h1',
  content: 'Тест по программированию',
  parentElement: wraperDiv
});

var form = app.createElement({
  tagName: 'form',
  parentElement: wraperDiv,
});

app.generateQuestions(questionsAmount.set0, answersAmount.set0);

app.createElement({
  tagName: 'input',
  inputType: 'submit',
  content: 'Проверить мои результаты',
  parentElement: form
});

