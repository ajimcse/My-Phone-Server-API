const bgLoadData = async () => {
    const res = await fetch(
        'https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089'
    );

    const data = await res.json();
    console.log(data);

    const phoneContainer = document.getElementById('phone-container');

    phoneContainer.innerHTML = `
        <img src="${data.data.image}" alt="iPhone">
    `;
};
bgLoadData();

const loadData = async () => {
    const res = await fetch(
        'https://openapi.programming-hero.com/api/phones?search=iphone'
    );

    const data = await res.json();

    const loadPhoneContainer =
        document.getElementById('data-container');

    data.data.forEach(phone => {

        const div = document.createElement('div');

        div.innerHTML = `
            <div class="card bg-base-100 shadow-xl border p-5">

                <figure>
                    <img
                        class="w-full h-52 object-contain"
                        src="${phone.image}"
                        alt="${phone.phone_name}"
                    >
                </figure>

                <div class="card-body">

                    <h2 class="card-title">
                        ${phone.phone_name}
                    </h2>

                    <p>
                        ${phone.slug}
                    </p>

                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">
                            Details
                        </button>
                    </div>

                </div>

            </div>
        `;

        loadPhoneContainer.appendChild(div);
    });
};

loadData();

