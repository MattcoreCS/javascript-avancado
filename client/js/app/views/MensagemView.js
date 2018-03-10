class MensagemView extends View
{
	template(model)
	{
		return model.texto ? `<p class="ui violet message"><i class="close icon"></i>${model.texto}</p>` : '<p></p>';
	}
}