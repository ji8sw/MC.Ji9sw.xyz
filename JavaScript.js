document.addEventListener('DOMContentLoaded', function () {
    var AudioSources = [];

    var Volume = document.querySelector('.slider').value / 100;
    document.querySelector('.slider').addEventListener('input', function () {
        Volume = this.value / 100;

        for (var i = 0; i < AudioSources.length; i++) {
            AudioSources[i].volume = Volume;
        }
    });

    var SoundCategoryWalk = document.getElementById("SoundCategoryWalk");
    var SoundCategoryBlocks = document.getElementById("SoundCategoryBlocks");
    var SoundCategoryMobs = document.getElementById("SoundCategoryMobs");
    var SoundCategoryMisc = document.getElementById("SoundCategoryMisc");

    var PlayButtonWalk = document.getElementById('PlayButtonWalk');
    var PlayButtonBlocks = document.getElementById('PlayButtonBlocks');
    var PlayButtonMobs = document.getElementById('PlayButtonMobs');
    var PlayButtonMisc = document.getElementById('PlayButtonMisc');

    PlayButtonWalk.addEventListener('click', function () {
        PlaySound('Sounds\\' + SoundCategoryWalk.options[SoundCategoryWalk.selectedIndex].value + ".ogg");
    });
    PlayButtonBlocks.addEventListener('click', function () {
        PlaySound('Sounds\\' + SoundCategoryBlocks.options[SoundCategoryBlocks.selectedIndex].value + ".ogg");
    });
    PlayButtonMobs.addEventListener('click', function () {
        PlaySound('Sounds\\' + SoundCategoryMobs.options[SoundCategoryMobs.selectedIndex].value + ".ogg");
    });
    PlayButtonMisc.addEventListener('click', function () {
        PlaySound('Sounds\\' + SoundCategoryMisc.options[SoundCategoryMisc.selectedIndex].value + ".ogg");
    });


    function PlaySound(SoundFileName) {
        for (var i = AudioSources.length - 1; i >= 0; i--) {
            if (AudioSources[i].paused) {
                AudioSources.splice(i, 1);
            }
        }

        var AudioSRCAlternate = new Audio();
        AudioSRCAlternate.src = SoundFileName;
        AudioSRCAlternate.volume = Volume;
        AudioSRCAlternate.play();
        AudioSources.push(AudioSRCAlternate);
    }
});
