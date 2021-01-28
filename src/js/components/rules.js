import { PageFlip } from 'page-flip';

const rules = document.createElement('div');
const rulesWrraper = document.createElement('div');
const rulesBook = document.createElement('div');

export default function renderRules() {
  rules.classList.add('rules__container', 'rules__container--hide');
  rulesWrraper.classList.add('rules__wrapper');

  rulesBook.classList.add('rules__book');

  for (let i = 1; i <= 8; i += 1) {
    rulesBook.appendChild(getPage(i));
  }

  rulesWrraper.appendChild(rulesBook);
  rules.appendChild(rulesWrraper);
  document.body.appendChild(rules);
}

export function flipRules() {
  rules.classList.remove('rules__container--hide');

  const pageFlip = new PageFlip(rulesBook, {
    width: 400, // base page width
    height: 600, // base page height

    size: 'stretch',
    // set threshold values:
    minWidth: 315,
    maxWidth: 1000,
    minHeight: 420,
    maxHeight: 1350,

    maxShadowOpacity: 0.5, // Half shadow intensity
    mobileScrollSupport: false, // disable content scrolling on mobile devices
  });
  // load pages
  pageFlip.loadFromHTML(document.querySelectorAll('.book__page'));
  // pageFlip.loadFromImages(['./assets/img/rules/innovation_rules_rus_1.jpg', './assets/img/rules/innovation_rules_rus_2.jpg', './assets/img/rules/innovation_rules_rus_3.jpg', './assets/img/rules/innovation_rules_rus_4.jpg']);
}

function getPage(num) {
  const page = document.createElement('div');
  page.classList.add('book__page', `book__page--${num}`);
  const pageHeader = document.createElement('div');
  pageHeader.classList.add('page__header');
  const headerTitle = document.createElement('div');
  headerTitle.classList.add('header__title');
  const pageTitle = document.createElement('div');
  pageTitle.classList.add('page__title');

  const pageMain = document.createElement('div');
  pageMain.classList.add('page__main');
  const textBlock = document.createElement('div');
  textBlock.classList.add('main__text');

  const pageFooter = document.createElement('div');
  pageFooter.classList.add('page__footer');
  const pageNumber = document.createElement('div');
  pageNumber.classList.add('page__number');
  switch (num) {
    case 1: {
      const headerIcons = document.createElement('div');
      headerIcons.classList.add('header__icons');
      headerIcons.innerHTML = `<div class="icon__num">2-4</div>
      <div class="icon__age">14+</div>
      <div class="icon__time">1 час</div>`;
      pageHeader.appendChild(headerIcons);

      headerTitle.style.background = 'url("./assets/img/rules/page1_header.jpg")';

      textBlock.innerHTML = `<p><b>• СОСТАВ ИГРЫ</b><br>• 4 планшета / памятки<br>• 105 карт инноваций<br>• 5 карт сфер развития<br>• правила игры
      <br></p><p><b>• ОБ ИГРЕ</b><br>
В «Инновации» игроки возглавляют несколько соперничающих цивилизаций. Ваша задача — развивать свою
цивилизацию с помощью <strong>инноваций</strong> — фундаментальных открытий и изобретений десяти исторических эпох.<br>
Карты инноваций делятся на пять цветовых групп (по 21 карте каждого цвета). Они дают вам разнообразные игровые возможности, а также приносят <strong>ресурсы</strong>, необходимые для соперничества с другими игроками.</p>
<p>У вас в игре может быть до пяти стопок с картами инноваций — по одной каждого цвета. Разыгрывая карту инновации, кладите её поверх соответствующей стопки.</p>
<p>У каждой карты инновации есть один или несколько игровых эффектов — <strong>догм</strong>. Догмы отражают идеологию вашей цивилизации в определённый
момент времени. Каждая догма привязана к одному из шести ресурсов и может быть либо кооперативной, либо
агрессивной. <strong>Кооперативные догмы</strong> действуют на благо всех игроков, у которых нужного ресурса не меньше,
чем у вас. <strong>Агрессивные</strong> заставляют тех соперников, у кого нужного ресурса меньше, чем у вас, выполнять ваши требования. Пользуйтесь догмами, чтобы
привести вашу цивилизацию к победе раньше, чем это сделают соперники!</p>
<p>Только верхние карты ваших стопок считаются <strong>активными</strong> и дают вам ресурсы. Некоторые догмы позволяют <strong>сдвигать стопки</strong> — в таком случае
могут открыться символы ресурсов на лежащих ниже картах, и они также будут приносить вам ресурсы. Чем больше ресурсов приносят ваши карты,
тем проще вам нападать на соперников и отбиваться от их агрессий, а также пользоваться чужими кооперативными догмами. Наконец, часть догм позволяет вам наращивать влияние для того,
чтобы <strong>лидировать</strong> в различных исторических эпохах.</p>
<p>Победить в игре можно тремя путями.
Первый — добиться лидерства в определённом числе эпох и/или сфер развития цивилизации. Второй — обладать
наибольшим влиянием к концу игры. Третий — выполнить условие особой победной догмы.</p>
<img class="page1__img" src='./assets/img/rules/page1_img.jpg'>`;

      break;
    }

    case 2: {
      const textBlockCenter = document.createElement('div');
      textBlockCenter.classList.add('main__text--center');
      textBlockCenter.innerHTML = `<p><b>Подготовка к игре</b></p>
<p>Разделите карты инноваций на 10 колод по эпохам, перетасуйте каждую и выложите в виде круга на стол. Вытяните по одной карте из первых девяти колод
и положите в центр, не глядя на их лицевую сторону. Эти карты достанутся лидерам соответствующих эпох. 5 карт сфер развития положите рядом с кругом. Каждый
игрок получает планшет, тянет 2 карты из колоды 1, одну из них кладёт перед собой в открытую, а вторую оставляет на руке, не показывая соперникам.</p>
<p>Первым ходит тот, чья выложенная карта инновации идёт раньше других по алфавиту. В свой первый ход первый игрок (либо первый
и второй, если играют четверо) совершает только одно действие вместо двух положенных.</p>`;
      pageMain.appendChild(textBlockCenter);

      const imgBlock = document.createElement('img');
      imgBlock.classList.add('page2__img');
      imgBlock.src = './assets/img/rules/page2_img.jpg';
      pageMain.appendChild(imgBlock);

      textBlock.innerHTML = `<p><b>• ХОД ИГРЫ</b><br>
В свой ход игрок должен выполнить <strong>два действия</strong> из нижеперечисленных в любой последовательности. Можно выбрать два разных действия или выполнить одно и то же дважды:</p>
<p><span class="light-box">Взять карту / Активировать карту<br>Сыграть карту / Добиться лидерства</span><p>
<p>После этого ход передаётся следующему игроку по часовой стрелке.</p>
<p><i>Вы не имеете права скрывать от соперников, сколько карт у вас на руке и к каким эпохам они относятся.</i></p>
<p><span class="dark-box"><strong>АКТИВНЫЕ КАРТЫ</strong><br>Все верхние карты в стопках перед игроками считаются <strong>активными</strong>. Они должны быть видны всем игрокам.</span><p>`;
      break;
    }

    case 3: {
      pageTitle.textContent = 'ДЕЙСТВИЯ';
      pageHeader.appendChild(pageTitle);

      textBlock.innerHTML = `<p><b>• ВЗЯТЬ КАРТУ</b>
Возьмите на руку верхнюю карту из колоды эпохи, номер которой равен уровню вашей старшей активной карты.</p>
<p><i>У игрока может быть сколько угодно карт на руке.</i></p>
<p>Если у вас нет карт в игре, берите карту из колоды 1.<br>
Если в нужной колоде нет карт, возьмите карту из следующей по старшинству колоды.</p>
<p><i><strong>Пример:</strong> у вашей старшей активной карты уровень 4, однако колоды 4, 5 и 6 исчерпаны. Возьмите карту из колоды 7.</i></p>
<p>Этим действием вы не можете взять карту из колоды, номер которой ниже уровня вашей старшей активной карты.</p>
<div class="devider"></div>
<p><b>• СЫГРАТЬ КАРТУ</b>
Выберите карту у себя на руке и выложите её перед собой поверх стопки того же цвета.<br>
Если у вас в игре ещё нет карт этого цвета, начните новую стопку.</p>
<p>Если нужная стопка уже сдвинута (см. стр. 7), выкладывайте сыгранную карту со сдвигом.</br>
Вы можете сыграть карту любого уровня.</p>
<p><i><strong>Пример:</strong> вы выкладываете «Гончарное дело» (1) поверх «Генетики» (9).</i></p>
<div class="devider"></div>
<p><b>• Активировать карту</b>
Выполните догму (догмы) одной из ваших активных карт. Это ключевое действие в игре: именно догмы определяют, каким образом ваша цивилизация движется к победе.<br>
<strong>• Выберите одну из своих активных карт.</strong><br>
<strong>• Определите, на кого влияет догма:</strong><br>
Каждая догма отмечена значком, который показывает её тип (<img class="dogma-type__icon" src='./assets/img/cards-bg/aggressive.png'><img class="dogma-type__icon" src='./assets/img/cards-bg/corporate.png'>),</p>
<p>а также нужный ресурс<br>(<i class='fab fa-fort-awesome rules__icon card__icon-color--grey'></i><i class='fas fa-crown rules__icon card__icon-color--yellow'></i><i class='far fa-clock rules__icon card__icon-color--blue'></i><i class='fas fa-lightbulb rules__icon card__icon-color--purple'></i><i class='fab fa-pagelines rules__icon card__icon-color--green'></i><i class='fas fa-industry rules__icon card__icon-color--red'></i>).</p>
<p>Каждый игрок подсчитывает, какое количество данного ресурса приносят его карты в игре. От этого зависит, повлияет ли на него эффект догмы.<br>
<strong>• Примените эффект догмы.</strong><br>
Если у карты несколько догм, они действуют одна за другой в указанном порядке. Полностью выполните одну догму, прежде чем переходить к следующей.</p>
<p><i>Одну и ту же карту можно активировать дважды за ход — сначала первым действием, а затем вторым.</i></p>
<div class="devider"></div>
<p><b>• ДОБИТЬСЯ ЛИДЕРСТВА</b>
Вы можете добиться лидерства в одной из эпох (если её карта лидерства всё ещё лежит посреди стола). Для этого вам надо:</p>
<p>• обладать влиянием, как минимум в пять раз превосходящим номер этой эпохи, а также<br>
• иметь в игре хотя бы одну активную карту с уровнем не меньше, чем номер этой эпохи.</p>
<p><i>Пример: для лидерства в эпохе 3 вам надо набрать 3 × 5 = 15 очков влияния и держать активной хотя бы одну карту уровня 3 или выше.</i></p>
<p>Если ваша цивилизация отвечает обоим условиям, заберите со стола карту лидерства в нужной эпохе и подложите под свой планшет с правой стороны.</p>
<p>Получая карту лидерства, вы не теряете очки влияния. Никто и ничто не может лишить вас полученных карт лидерства.</p>
<p><i>Игроки не имеют права смотреть на лицевую сторону карт лидерства ни когда их получают, ни после этого.</i></p>
<p>Вы не тратите действие, чтобы добиться лидерства в <strong>сфере развития</strong> (см. стр. 5).</p>`;
      break;
    }

    case 4: {
      pageTitle.textContent = 'Виды догм';
      pageHeader.appendChild(pageTitle);

      textBlock.innerHTML = `<p>Перед описанием эффекта догмы стоит значок, который показывает вид этой догмы, а также ресурс, с помощью которого она влияет на игру.</p>
<img src="./assets/img/rules/page4-img1.png">
<p class="dogma-type__icon--position"><img class="dogma-type__icon" src='./assets/img/cards-bg/aggressive.png'><b>АГРЕССИВНЫЕ ДОГМЫ</b></p>
<p>Такие догмы отмечены значком <img class="dogma-type__icon" src='./assets/img/cards-bg/aggressive.png'> и начинаются со слов «Я требую:», за которыми следует приказ от имени владельца карты.</p>
<p><strong>Догма затрагивает:</strong> всех ваших соперников, у кого нужного ресурса меньше, чем у вас.</p>
<p><strong>Эффект:</strong> все затронутые догмой игроки выполняют её требования по часовой стрелке, начиная с игрока слева от вас.</p>
<div class="devider"></div>
<img src="./assets/img/rules/page4-img2.png">
<p class="dogma-type__icon--position"><img class="dogma-type__icon" src='./assets/img/cards-bg/corporate.png'><b>КООПЕРАТИВНЫЕ ДОГМЫ</b></p>
<p>Такие догмы отмечены значком <img class="dogma-type__icon" src='./assets/img/cards-bg/corporate.png'> и могут принести пользу не только своему владельцу, но и его соперникам.</p>
<p><strong>Догма затрагивает:</strong> вас и всех ваших соперников, у которых нужного ресурса не меньше, чем у вас.</p>
<p><strong>Эффект:</strong> все затронутые догмой игроки выполняют её требования по часовой стрелке, начиная с игрока слева от вас и заканчивая вами.</p>
<p><span class="light-box"><b>Кооперативный бонус:</b> если ваша кооперативная догма принесла пользу хотя бы одному сопернику, то после выполнения всех догм активированной карты вы берёте карту (аналогично действию «Взять карту»). Даже если соперники несколько раз получали пользу от вашей догмы (догм), вы берёте только одну карту.</span></p>
<div class="devider"></div>
<p><b>ДРУГИЕ ПРАВИЛА</b><br>
Все затронутые игроки должны полностью выполнить все догмы активированной карты, даже если в ходе выполнения она сброшена или накрыта другой картой.</p>
<p>Затронутый игрок не может отказаться от выполнения догмы (в том числе и кооперативной), если в её тексте не сказано «вы можете».</p>
<p>Кооперативная догма приносит сопернику пользу (и следовательно, вы получаете кооперативный бонус) только в том случае, если из-за действия догмы у соперника изменилась игровая ситуация.</p>
<p><i><strong>Пример:</strong> если кооперативная догма требует сыграть карту с руки, но у соперника на руке нет карт, он не получает пользы от догмы, а вы не получаете бонуса.</i></p>`;
      break;
    }

    case 5: {
      const textBlockFirst = document.createElement('div');
      textBlockFirst.classList.add('main__text');
      textBlockFirst.innerHTML = `<p><b>• СФЕРЫ РАЗВИТИЯ</b></p>
<p>Вы можете добиться лидерства не только в исторических эпохах, но и в сферах развития цивилизации.</p>
<p>Для такого лидерства вам не нужно ни накапливать влияние, ни тратить отдельное действие.</p>
<p>Вы становитесь лидером в одной из сфер автоматически, сразу после того как выполните условие, указанное на карте этой сферы.</p>
<p>Получив карту сферы развития, подложите её под свой планшет с правой стороны. Такая карта во всём аналогична картам лидерства в эпохе: её нельзя лишиться и она идёт в счёт при определении победы по лидерству.</p>
<p>Кроме того, добиться лидерства в сфере развития можно с помощью особой догмы. Названия карт инноваций с такими догмами указаны на соответствующих картах сфер.</p>
<p><i>Догмы, позволяющие добиться лидерства в сферах, — кооперативные. Когда будете пользоваться ими, следите за тем, чтобы никто не перехватил лидерство раньше вас.</i></p>
<p>Если два игрока одновременно выполняют условие лидерства в сфере (например, обменявшись картами), лидером становится тот из них, чей сейчас ход, либо ближайший к нему игрок слева.</p>
<div class="page5__block">
<div class="page5__block--img"><img src="./assets/img/rules/page5-img1.png"><img src="./assets/img/rules/page5-img2.png"></div>
<div><i>Вы добьетесь лидерства в «Военном деле», как только ваши карты приносят по 3 единицы каждого ресурса, либо активировав карту «Укрепления».</i></div>
</div>`;
      pageMain.appendChild(textBlockFirst);

      const textDevider = document.createElement('div');
      textDevider.classList.add('devider');
      pageMain.appendChild(textDevider);

      textBlock.innerHTML = `<p><b>• КОНЕЦ ИГРЫ</b></p>
      • ПОБЕДА ПО ЛИДЕРСТВУ
Игрок, набравший определённое число
карт лидерства (учитываются как эпохи,
так и сферы), немедленно побеждает.
Выигрышное количество карт лидерства зависит от числа игроков:
2 игрока — 6 карт лидерства
3 игрока — 5 карт лидерства
4 игрока — 4 карты лидерства
• ПОБЕДА ПО ДОГМЕ
В эпохах 8, 9 и 10 встречаются карты
инноваций с догмами, которые могут
сделать одного из игроков победителем. Если такая карта активирована
и игрок выполняет условия победной
догмы, он немедленно выигрывает.
• ПОБЕДА ПО ВЛИЯНИЮ
Если никто не победил ни по лидерству, ни по догме, партия завершается
в одном из следующих случаев:
• игрок должен взять карту из колоды
с номером больше 10 (например, ему
нужно взять карту из колоды 10, но там
не осталось карт), либо
• игрок воспользовался догмой,
которая предписывает партии завершиться.
Побеждает тот из игроков, у кого
больше влияния. Если на победу по
влиянию претендует несколько игроков, выигрывает тот
из них, у кого больше
карт лидерства. Если
и это не разрешает
спор, претенденты
делят победу.`;
      break;
    }
    default: break;
  }
  pageNumber.textContent = num;

  pageHeader.appendChild(headerTitle);
  page.appendChild(pageHeader);

  pageMain.appendChild(textBlock);
  page.appendChild(pageMain);

  pageFooter.appendChild(pageNumber);
  page.appendChild(pageFooter);

  const pageShadow = document.createElement('div');
  pageShadow.classList.add('page__shadow');
  page.appendChild(pageShadow);

  return page;
}
