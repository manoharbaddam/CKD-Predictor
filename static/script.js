const inputs = document.querySelectorAll("input , select");
const paramText = document.getElementById("paramText");
const inputParameter = document.getElementById("inputParameter");


const parameterDetails = {
    sg: `
    <p>It measures how concentrated the urine is.</p>
<p><b>Normal range:</b> 1.005 - 1.030</p>
<p><b>If low:</b> Too much water in urine (could be kidney issues).</p>
<p><b>If high:</b> Less water, more substances (dehydration or kidney problems).</p>
<p><b>Stay hydrated for healthy kidneys.</b></p>
<p><b>Concentration tells a kidney tale.</b></p>
  `,
    hemo: `
    <p>Hemoglobin: the vital protein for oxygen transport.</p>
<p><b>Normal range:</b></p>
<p><b>Men</b>: 13.8–17.2 g/dL</p>
<p><b>Women</b>: 12.1–15.1 g/dL</p>
<p><b>Low levels (Anemia):</b> Can stem from iron deficiency, blood loss, or issues with red blood cell production, leading to fatigue and weakness.</p>
<p><b>High levels:</b> May be due to dehydration, living at high altitudes, smoking, or certain medical conditions that cause the body to produce more red blood cells.</p>
<p>Keep your hemoglobin in the healthy zone for energy and well-being!</p>
  `,
    rc: `<p><strong>Red Blood Cell Count (RBC)</strong> - 4.50 million/cmm</p>

<p>Measures the number of red blood cells in the blood.</p>

<ul>
  <li><strong>Normal range:</strong></li>
  <ul>
    <li><strong>Men:</strong> 4.7–6.1 mill/cmm</li>
    <li><strong>Women:</strong> 4.2–5.4 mill/cmm</li>
  </ul>
  <li><strong>Low RBC:</strong> Anemia (fatigue, weakness).</li>
  <li><strong>High RBC:</strong> Can indicate dehydration or other issues.</li>
</ul>
`,
    pc: `<p>Pus Cells in Urine = White blood cells indicating a potential issue.</p>
<p>These are your body's defenders showing up in your urine.</p>
<p><b>Normal range:</b> 0-5 pus cells per high power field (HPF).</p>
<p><b>Elevated levels:</b> Often signal an infection somewhere in your urinary system – bladder, urethra, or even the kidneys.</p>
<p>Inflammation in these areas can also cause a rise in pus cells.</p>
<p>If your levels are high, it's a sign to consult a doctor to pinpoint the cause and get the right treatment.</p>
`,
    appet: `<p>Appetite = Your natural drive to eat.</p>
<p>It's the body's way of signaling its need for fuel.</p>
<p>A consistently poor appetite, a lack of desire to eat, can be a subtle clue that something isn't quite right with your health.</p>
<p>While many things can affect appetite, it's worth noting that kidney problems can sometimes lead to a reduced urge to eat due to factors like nausea, changes in taste, or a buildup of waste products in the body.</p>
<p>Don't ignore a persistent loss of appetite; it could be a sign that warrants a check-up.</p>
`,
    al: `<p><strong>Albumin</strong> is a protein in blood.</p>

<p><strong>Normal range:</strong> 0-5 mg/dL.</p>

<p>High levels in urine → Kidney damage or disease.</p>

<p>It can also indicate conditions like diabetes or hypertension.</p>

<p>Regular monitoring is essential for early detection of kidney issues.</p>
`,

    dm: `<p>Diabetes Mellitus = Persistently high blood sugar.</p>
<p>Think of it as too much sugar in your bloodstream.</p>
<p>If present, it signifies diabetes, a condition where your body doesn't regulate blood sugar properly.</p>
<p>Over time, this excess sugar can act like tiny shards, damaging delicate blood vessels, including those in your kidneys.</p>
<p>Managing diabetes through diet, exercise, and medication is crucial for protecting kidney health.</p>
<p>Regular monitoring of blood sugar and kidney function is vital for individuals with diabetes.</p>
`,
    htn: `<p>Hypertension = High blood pressure (BP).</p>
<p>If present, it means blood pressure is higher than normal, which can affect kidney health.</p>
<p>High BP is a risk factor for kidney disease.</p>
<p><b>Control it to protect your kidneys.</b></p>
<p><b>Regular checks are key for kidney health.</b></p>`,

};




inputs.forEach(input => {
    input.addEventListener("focus", () => {
        console.log(input);

        const label = document.querySelector(`label[for="${input.id}"]`);
        if (label) {
            inputParameter.textContent = label.textContent;
        } else {
            inputParameter.textContent = "Parameter";
        }

        const paramName = input.getAttribute("name");
        // const info = input.getAttribute("data-info");
        const info = parameterDetails[input.id];

        // inputParameter.textContent = paramName ;;
        paramText.innerHTML = info || "No info available for this field.";
    });
});

