export default function element(state = [], action) {
	switch (action.type) {
		case 'LIST_ITEM':
			return [ action.data ];
			break;
		case 'ADD_ITEM':
			break;
		case 'EDIT_ITEM':
			break;
		case 'REMOVE_ITEM':
			break;

		default:
			return state;
	}
}
