const dog = {
    name: "파트라슈",
    species: "믹스",
    color: "갈색",
    age: 3,
    intro: function() {
        return `우리집 강아지 이름은 ${this.name} 입니다.`;
    },
};

dog.getAge = function() {
    return `나이는 ${this.age}살 입니다.`;
};

document.getElementById("show").innerHTML = dog.intro();