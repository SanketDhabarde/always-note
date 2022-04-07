export const filterByLabels = (notes, labels) => {
    if(labels.length > 0){
        return notes.filter(note => note.tags.some(label => labels.includes(label)))
    }
    return notes;
}