export const prettifyText = (text) => {
	return text
		.replace(/(\n|\\)/g, '<br />')
		.replace(/«\s/g, '« ')
		.replace(/\s»/g, ' »');
}