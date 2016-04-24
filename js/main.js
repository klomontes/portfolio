window.onload = function () {
  document.body.style.opacity = 1;

  (function() {
    var skills = document.getElementById('skills').children;
    var workItems = document.getElementsByClassName('item');

    for (var i = 0; i < skills.length; i++) {
      skills[i].onclick = function (e) {
        if (e.target.classList.contains('active')) {
          resetWork();
        } else {
          filterWork(this.id);
        }
        e.target.classList.toggle('active');
        resetSkills(e.target.id);
      }
    }

    for (var y = 0; y < workItems.length; y++) {
      workItems[y].onclick = function(e) {
        e.target.preventDefault();
        e.target.classList.toggle('expand');
      }
    }

    function resetWork () {
      for (var m = 0; m < workItems.length; m++) {
        workItems[m].classList.remove('dimmed');
      }
    }

    function resetSkills (activeSkill) {
      for (var x = 0; x < skills.length; x++) {
        if (skills[x].id !== activeSkill)
          skills[x].classList.remove('active');
      }
    }

    function toggleActiveSkill (target) {
      for (var n = 0; n < skills.length; n++) {
        if (target.classList.contains('active')) {
          target.classList.remove('active');
        } else {
          target.classList.add('active');
          filterWork(target.id);
        }
      }
    }

    function filterWork (target) {
      for (var i = 0; i < workItems.length; i++) {
        if (!(workItems[i].classList.contains(target))) {
          workItems[i].classList.add('dimmed');
        } else {
          workItems[i].classList.remove('dimmed');
        }
      }
    };
  })();
}
