document.addEventListener('DOMContentLoaded', function () {
    var Volume = this.value / 100;
    document.querySelector('.slider').addEventListener('input', function () {
        Volume = this.value / 100;
    });

    var StoneBreakButton = document.getElementById('StoneBreak');
    var WoodBreakButton = document.getElementById('WoodBreak');
    var ZombieDeathButton = document.getElementById('ZombieDeath');
    var SkeletonDeathButton = document.getElementById('SkeletonDeath');

    StoneBreakButton.addEventListener('click', function () {
        PlaySound('Sounds\\stone4.ogg');
    });

    WoodBreakButton.addEventListener('click', function () {
        PlaySound('Sounds\\wood4.ogg');
    });

    SkeletonDeath.addEventListener('click', function () {
        PlaySound('Sounds\\SkeletonDeath.ogg');
    });

    ZombieDeath.addEventListener('click', function () {
        PlaySound('Sounds\\ZombieDeath.ogg');
    });


    function PlaySound(SoundFileName) {
        const AudioSRC = new Audio(SoundFileName);
        AudioSRC.volume = Volume;
        AudioSRC.play();
    }
});
