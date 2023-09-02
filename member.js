function skillsMember(skills) {
    let skillsMember = ''
    for (let i = 0; i < skills.length; i++) {
        skillsMember += `<li>${skills[i]}</li>`
    }
    return skillsMember
}