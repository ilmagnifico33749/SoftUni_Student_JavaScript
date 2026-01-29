function editElement(ref, match, replacer) {
    let text = ref.textContent;
    ref.textContent = text.replaceAll(match, replacer);
}
