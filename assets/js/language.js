const english = {
    name: "",
    birthdate: "Date of birth:",
    birthdateText: "",
    gender: "Gender:",
    genderText: "Male",
    email: "Email address:",
    introduction: "Introduction",
    introductionText:
        `
		`,
    research: "Research",
    tdk: "",
    embedded: ``,
    learn: "Education and Training",
    engineer: "",
    bme: "",
    szlg: "",
    pro: "Professional experience",
    competitions: "",
    competitionsText:
        `
		
		`,
    university: "",
    universityText:
        `
		
		`,
    lang: "Language skills",
    langText: "",
}

$(function () {
    return;
    $("*").each(function (i) {
        console.log(this);
        if (this.dataset === undefined || this.dataset.tr === undefined) return;

        this.innerHTML = english[this.dataset.tr];
    });
});
