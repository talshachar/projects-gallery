console.log('Starting up');



$(document).ready(initPage);
function initPage() {
    renderProjects();
}


function renderProjects() {
    var projects = getProjects();
    var strHTMLs = projects.map(proj => {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" onclick="renderModal('${proj.name}')" href="#portfolioModal">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                        <i class="fa fa-search-plus fa-3x"></i>
                    </div>
                </div>
                <img class="img-fluid" style="box-shadow: 0 5px 5px rgba(0,0,0,.1)" src="${proj.imgSrc}">
              </a>
                <div class="portfolio-caption">
                    <h4>${proj.title}</h4>
                    <p class="text-muted">${proj.desc}</p>
                </div>
            </div>`;
    });

    $('.projects-container').html(strHTMLs.join(''));
}

function renderModal(projName) {
    var project = getProjects().find(proj => proj.name === projName)
    var strHTML =
        `<h2 class="mb-3">${project.title}</h2>
        <a class="item-intro text-muted" href="${project.url}" target="_blank" >${project.url}</a>
        <img class="img-fluid d-block mt-4" src="${project.imgSrc}">
            <p>${project.desc}</p>
            <ul class="list-inline text-muted">
                <li>Published at: ${new Date(+project.publishedAt * 1000).toLocaleDateString("en-US")}</li>
                <li>Labels: ${project.labels.join(', ')}</li>
            </ul>
            <a href="${project.url}" target="_blank" class="btn btn-xl btn-danger text-white mb-1">
                <i class="fa fa-external-link"></i>
                Open Project</a><br />
            <a href="${project.codeUrl}" target="_blank" class="btn btn-dark">
            <i class="fa fa-github"></i>
                Open Code</a>`;

    $('.modal-body').html(strHTML);
}