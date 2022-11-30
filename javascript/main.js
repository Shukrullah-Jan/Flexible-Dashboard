
// enable tooltips
const tooltipTriggerList = $('[data-bs-toggle="tooltip"]')
const tooltipList =
    [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
