// src/plugins/card/components/SidebarToggle.ts
import iconUrl from '../assets/images/layout-sidebar-right.png';

export function createSidebarToggle() {
  const sidebarBtn = document.createElement('div');
  sidebarBtn.className = 'menu-item__sidebar-toggle';
  sidebarBtn.title = '侧边栏';

  const icon = document.createElement('img');
  icon.className = 'layout-sidebar-right';
  icon.src = iconUrl;
  icon.alt = '侧边栏';
  icon.style.width = '18px';
  icon.style.height = '18px';
  sidebarBtn.appendChild(icon);

  sidebarBtn.onclick = () => {
    const right = document.querySelector('.right-content');
    const left = document.querySelector('.left-content');
    if (right && left) {
      right.classList.toggle('show');
      left.classList.toggle('with-sidebar', right.classList.contains('show'));
    }
  };

  return sidebarBtn;
}