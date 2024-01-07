function toggleSkills(category) {
    var skillsContent = document.getElementById('skills-content');
    var devContent = document.getElementById('developer-skills');
    var desContent = document.getElementById('designer-skills');

    if (category === 'Developer') {
        toggleContent(devContent, desContent, skillsContent);
    } else if (category === 'Designer') {
        toggleContent(desContent, devContent, skillsContent);
    }

    // Check if the clicked category is the currently active one
    var isSameCategory = (category === 'Developer' && devContent.style.display === 'block') ||
                         (category === 'Designer' && desContent.style.display === 'block');

    // If it's the same category, close the content
    if (isSameCategory) {
        slideUp(isSameCategory ? (category === 'Developer' ? devContent : desContent) : null, skillsContent);
    } else {
        // Otherwise, toggle the content as usual
        toggleContent(category === 'Developer' ? devContent : desContent, 
                      category === 'Designer' ? devContent : desContent, 
                      skillsContent);
    }
}

function toggleContent(showContent, hideContent, skillsContent) {
    if (showContent.style.display !== 'block') {
        slideUp(hideContent, skillsContent, function() {
            if (showContent === document.getElementById('developer-skills')) {
                skillsContent.style.justifyContent = 'flex-start'; // Reset to center before sliding down
            } else if (showContent === document.getElementById('designer-skills')) {
                skillsContent.style.justifyContent = 'flex-end';
            }

            slideDown(showContent, skillsContent);
        });
    }
}

function slideDown(element, skillsContent) {
    element.style.display = 'block';
    element.style.height = 0;

    var height = 0;
    var slideDownInterval = setInterval(function () {
        if (height < element.scrollHeight) {
            height += 10;
            element.style.height = height + 'px';

        } else {
            clearInterval(slideDownInterval);
        }
    }, 20); // Adjust the interval as needed
}

function slideUp(element, skillsContent, callback) {
    var height = element.scrollHeight;

    var slideUpInterval = setInterval(function () {
        if (height > 0) {
            height -= 10;
            element.style.height = height + 'px';
        } else {
            clearInterval(slideUpInterval);
            element.style.display = 'none';
            element.style.height = 'auto'; // Reset height to auto after sliding up
            if (callback) callback();
        }
    }, 20); // Adjust the interval as needed
}