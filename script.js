<script>
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('.menu-img').style.transform = 'scale(1.1)';
    });
    item.addEventListener('mouseleave', () => {
        item.querySelector('.menu-img').style.transform = 'scale(1)';
    });
});
</script>
