# BotManger Formular

Custom HTML Elemente um Formulare für das botmanger Frontend zu erstellen.<br>

Demo https://david-domain.com/bm-form/

## `<botmanager-form>`

---

Das `<botmanager-form>` Element ist ein `<form>` Element mit eingebautem AJAX POST Request.<br>
Alle Formfelder die nicht `disabled` sind werden an die in `action` angegebene Adressse geschickt.<br>
Das `<botmanager-form>` Element besitzt eine `response` Funktion,
um die Antwort des Server zu verarbeiten.<br>Alle anderen Elemente werden über Attribute definiert,
ohne Funktionen aufrufen zu müssen.<br><br>

Um die Antwort des Servers zu verarbeiten reicht folgndes Schipsel:<br>

```javascript
<script>
    // Warten bis das Form Element vollständig definiert wurde.
    customElements.whenDefined("botmanager-form").then(() => {
    // Form Element auswählen.
    const botManagerForm = document.querySelector("botmanager-form");
    // Funktion die aufgerufen werden soll, wenn Server antwortet.
    function serverResponse(data) {
        // In data ist die Antwort des Server enthalten.

        // Mit showResponse kann die Antwort, oder ein beliebiger String angezeigt werden.
        // Der zweite Parameter für showResponse ist ein timeout in ms und gibt an, wann
        // die Anzeige wieder verschwinden soll.
        this.showResponse(data, 6000);
    }
    // serverResponse muss an die response Methode des botmanger-form Element übergeben werden.
    botManagerForm.response(serverResponse);
    });
</script>
```

Die `index.html` entählt ein vollständiges Beispiel.

<br>

| Attribute              | Feldtyp  | Beschreibung                            | Erforderlich |
| ---------------------- | -------- | --------------------------------------- | ------------ |
| Funktionale Attribute: |
| _action_               | `string` | Ziel des Formulars.                     | &check;      |
| Visuelle Attribute:    |
| _bgClr_                | `string` | Hintergrundfarbe des Formulars.         | &cross;      |
| _textClr_              | `string` | Die Textfarbe des Formulars.            | &cross;      |
| _btnBgClr_             | `string` | Hintergrundfarbe des Buttons.           | &cross;      |
| _btnBgHoverClr_        | `string` | Hintergrundfarbe des Buttons bei Hover. | &cross;      |
| _btnTextClr_           | `string` | Textfarbe des Buttons.                  | &cross;      |
| _btnTextHoverClr_      | `string` | Textfarbe des Buttons bei Hover.        | &cross;      |

<br>
<br>

## `<botmanager-fieldset>`

---

Mit dem `<botmanager-fieldset>` kannst du dein Formular aufgliedern und in unterschiedliche Bereiche aufteilen.<br>
Außerdem kannst du bestimmen, wieviele Spalten ein Fieldset haben soll.
<br>

| Attribute              | Feldtyp  | Beschreibung                                         | Erforderlich |
| ---------------------- | -------- | ---------------------------------------------------- | ------------ |
| Funktionale Attribute: |
| _slot_                 | `string` | Der Slotname des Formulars "`form-child`".           | &check;      |
| _legend_               | `string` | Die Überschrift des Fieldsets.                       | &cross;      |
| _collapsible_          | `bool`   | Das Fieldset wird auf- und zuklappbar.               | &cross;      |
| _switchable_           | `bool`   | Das Fieldset lässt sich aktivieren und deaktivieren. | &cross;      |
| Visuelle Attribute:    |
| _columns_              | `string` | Die Anzahl der Spalten im Fieldset                   | &cross;      |
| _bgClr_                | `string` | Hintergrundfarbe                                     | &cross;      |

<br>
<br>

## `<botmanager-input>`

---

Das `<botmanager-input>` kann ein normales Text-Inputfeld sein, oder ein nummerisches Feld, dass mit einem Slider vershen werden kann.
<br>

| Attribute              | Feldtyp  | Beschreibung                                                                                   | Erforderlich |
| ---------------------- | -------- | ---------------------------------------------------------------------------------------------- | ------------ |
| Funktionale Attribute: |
| _slot_                 | `string` | Der Fieldset Slotname "`fieldset-child`".                                                      | &check;      |
| _name_                 | `string` | Der Name des Feldes, der beim verschicken übergeben wird.                                      | &check;      |
| _value_                | `string` | Der ursprüngliche Wert des Feldes. Ist erforderlich, darf aber leer sein.                      | &check;      |
| _type_                 | `string` | Der type des Feldes ( "`text`" oder "`number`"). Default ist "`text`".                         | &cross;      |
| _uom_                  | `string` | Unit of Measurement.                                                                           | &cross;      |
| _label_                | `string` | Kurzbeschreibung / Übeschrift des Feldes.                                                      | &cross;      |
| _tooltip_              | `string` | Ausführliche Beschreibung des Feldes.                                                          | &cross;      |
| _slider_               | `bool`   | Erzeugt einen Slider für das Feld (abh. von `type`, nur wenn `type="number"`).                 | &cross;      |
| _min_                  | `string` | Minimaler Wert des Sliders.                                                                    | &cross;      |
| _max_                  | `string` | Maximaler Wert des Sliders.                                                                    | &cross;      |
| _step_                 | `string` | Genauigkeit mit der der Slider Werte an das Feld übergibt (basierend auf `min`, oder `value`). | &cross;      |
| _span_                 | `string` | Anzahl der Spalten im Grid (abh. von `columns` im `fieldset`).                                 | &cross;      |
| Visuelle Attribute:    |
| _labelClr_             | `string` | Label Textfarbe.                                                                               | &cross;      |
| _ttIconClr_            | `string` | Tooltip Icon Textfarbe.                                                                        | &cross;      |
| _ttIconBgClr_          | `string` | Tooltip Icon Hintergrundfarbe.                                                                 | &cross;      |
| _ttBgClr_              | `string` | Tooltip Hintergrundfarbe.                                                                      | &cross;      |
| _ttClr_                | `string` | Tooltip Textfarbe.                                                                             | &cross;      |
| _ttBrdClr_             | `string` | Tooltip Borderfarbe.                                                                           | &cross;      |
| _inpBgClr_             | `string` | Inputfeld Hintergrundfarbe.                                                                    | &cross;      |
| _inpClr_               | `string` | Inputfeld Textfarbe.                                                                           | &cross;      |
| _inpBrdClr_            | `string` | Inputfeld Borderfarbe.                                                                         | &cross;      |
| _sldValueClr_          | `string` | Slider Valuefarbe.                                                                             | &cross;      |
| _sldTrackClr_          | `string` | Slider Trackfarbe.                                                                             | &cross;      |
| _sldThumbClr_          | `string` | Slider Thumbfarbe.                                                                             | &cross;      |
| _uomClr_               | `string` | Unit of measurement Textfarbe.                                                                 | &cross;      |
| _focusBrdClr_          | `string` | Farbe des Schattens, bei Fokus auf Element.                                                    | &cross;      |

<br>
<br>

## `<botmanager-select>`

---

Das `<botmanager-select>` Feld, ist ein Select, an das du die Optionen via JSON String übergeben kannst.<br>
Es kann auch eine bestimmte Option vorselektiert werden.
<br>

| Attribute              | Feldtyp  | Beschreibung                                                                               | Erforderlich |
| ---------------------- | -------- | ------------------------------------------------------------------------------------------ | ------------ |
| Funktionale Attribute: |
| _slot_                 | `string` | Der Fieldset Slotname "`fieldset-child`".                                                  | &check;      |
| _name_                 | `string` | Der Name des Feldes, der beim verschicken übergeben wird.                                  | &check;      |
| _value_                | `string` | Ist erforderlich, kann aber leer sein. Kann eine bestimmte option selektieren.             | &check;      |
| _data_                 | `string` | `<option>` Elemente als JSON string: `{"options": [{"name":"foo", "value":"bar"}, ...] }`. | &check;      |
| _label_                | `string` | Kurzbeschreibung / Übeschrift des Feldes.                                                  | &cross;      |
| _tooltip_              | `string` | Ausführliche Beschreibung des Feldes.                                                      | &cross;      |
| _span_                 | `string` | Anzahl der Spalten im Grid (abh. von `columns` im `fieldset`).                             | &cross;      |
| Visuelle Attribute:    |
| _labelClr_             | `string` | Label Textfarbe.                                                                           | &cross;      |
| _ttIconClr_            | `string` | Tooltip Icon Textfarbe.                                                                    | &cross;      |
| _ttIconBgClr_          | `string` | Tooltip Icon Hintergrundfarbe.                                                             | &cross;      |
| _ttBgClr_              | `string` | Tooltip Hintergrundfarbe.                                                                  | &cross;      |
| _ttClr_                | `string` | Tooltip Textfarbe.                                                                         | &cross;      |
| _ttBrdClr_             | `string` | Tooltip Borderfarbe.                                                                       | &cross;      |
| _inpBgClr_             | `string` | Inputfeld Hintergrundfarbe.                                                                | &cross;      |
| _inpClr_               | `string` | Inputfeld Textfarbe.                                                                       | &cross;      |
| _inpBrdClr_            | `string` | Inputfeld Borderfarbe.                                                                     | &cross;      |
| _focusBrdClr_          | `string` | Farbe des Schattens, bei Fokus auf Element.                                                | &cross;      |

<br>
<br>

## `<botmanager-switch>`

---

Der `<botmanager-switch>` ist einfach nur eine fancy Checkbox.
<br>

| Attribute              | Feldtyp  | Beschreibung                                                   | Erforderlich |
| ---------------------- | -------- | -------------------------------------------------------------- | ------------ |
| Funktionale Attribute: |
| _slot_                 | `string` | Der Fieldset Slotname "`fieldset-child`".                      | &check;      |
| _name_                 | `string` | Der Name des Feldes, der beim verschicken übergeben wird.      | &check;      |
| _checked_              | `bool`   | Legt fest, ob der Switch an, oder aus ist.                     | &cross;      |
| _label_                | `string` | Kurzbeschreibung / Übeschrift des Feldes.                      | &cross;      |
| _tooltip_              | `string` | Ausführliche Beschreibung des Feldes.                          | &cross;      |
| _span_                 | `string` | Anzahl der Spalten im Grid (abh. von `columns` im `fieldset`). | &cross;      |
| Visuelle Attribute:    |
| _labelClr_             | `string` | Label Textfarbe.                                               | &cross;      |
| _checkedClr_           | `string` | Farbe bei aktivem Switch.                                      | &cross;      |
| _bgClr_                | `string` | Farbe bei inaktivem Switch.                                    | &cross;      |
| _thumbClr_             | `string` | Farge des Switch Thumb.                                        | &cross;      |
| _ttIconClr_            | `string` | Tooltip Icon Textfarbe.                                        | &cross;      |
| _ttIconBgClr_          | `string` | Tooltip Icon Hintergrundfarbe.                                 | &cross;      |
| _ttBgClr_              | `string` | Tooltip Hintergrundfarbe.                                      | &cross;      |
| _ttClr_                | `string` | Tooltip Textfarbe.                                             | &cross;      |
| _ttBrdClr_             | `string` | Tooltip Borderfarbe.                                           | &cross;      |
| _focusBrdClr_          | `string` | Farbe des Schattens, bei Fokus auf Element.                    | &cross;      |
