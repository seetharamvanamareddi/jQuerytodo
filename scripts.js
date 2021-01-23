$(function(){
	var todos=[
	{
		task: 'learn jQuery',
		isCompleted:false
	},
	{
		task:'watch a movie',
		isCompleted:true
	}
	]

	var app= {
		showTodos: function(){
			var todosList = $('#todos-list')

			todosList.html('')

			todos.forEach(function(todo){
				var taskClasses = 'todo-task' + (todo.isCompleted ? ' is-Completed': '');
				todosList.append('\
				<tr>\
					<td class="' + taskClasses +'">' + todo.task + '</td>\
					<td>\
						<button>Edit</button>\
						<button>Delete</button>\
					</td>\
				</tr>\
					');
			})
		},
		toggleTodo: function(){
			alert("toggled:");
		}
	}

	app.showTodos();

	$(".todo-task").on("click", app.toggleTodo);