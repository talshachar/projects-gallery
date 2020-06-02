'use strict';

var gProjects = createProjects();

function getProjects() {
    return gProjects;
}

function createProjects() {
    var projs = [
        { name: 'guess-who', desc: 'Worst Akinator', publishedAt: 1591011083, labels: ['game', 'mouse'] },
        { name: 'pacman', desc: 'Pacman for dummies', publishedAt: 1589846400, labels: ['game', 'keyboard'] },
        { name: 'minesweeper', desc: 'Minesweeper on steroids', publishedAt: 1022198400, labels: ['game', 'mouse'] },
        { name: 'touch-numbers', desc: 'Click on numbers like crazy', publishedAt: 1589673600, labels: ['game', 'mouse'] },
        { name: 'bookshop', desc: 'Bookshop admin panel', publishedAt: 1590796800, labels: ['shop', 'layout'] },
        { name: 'pop-balloons', desc: 'Pop all balloons like crazy', publishedAt: 1589414400, labels: ['game', 'mouse'] }
    ];
    projs = projs.map(proj => createProject(proj.name, proj.desc, proj.publishedAt, proj.labels));
    return projs;
}

function createProject(name, desc, publishedAt, labels) {
    function getTitle() {
        return name.replace(/-/g, ' ').replace(/\b./g, letter => letter.toUpperCase())
    }
    return {
        name: name,
        title: getTitle(),
        desc: desc,
        url: `https://talshachar.github.io/${name}/`,
        imgSrc: `img/portfolio/${name}.png`,
        publishedAt: publishedAt,
        labels: labels,
        codeUrl: `https://github.com/talshachar/${name}`
    };
}
