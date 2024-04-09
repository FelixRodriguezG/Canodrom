![Canodades logo](https://imgur.com/JiSa6bp.png)

# About the app
Canodades is the new statistics app for Canòdrom employees. Its name comes from catalan *Les dades del Canòdrom*, meaning *The Canòdrom's data*. 

This app allows filtering and sorting from a list of events that took place in the Canòdrom. Certain data can also be showed graphically.

Data collected and displayed include but do not limit to: 
+ Event name.
+ Attendees.
+ Attendees by gender.
+ Event type.
+ Where did the attendees find out about the event.

## Developed by
+ [Cristian Salas](http://github.com/ctupac999)
+ [Aitor Cortés](http://github.com/aetior)
+ [Félix Rodriguez](http://github.com/FelixRodriguezG)
+ [Isiah Zacarías](http://github.com/isiahzac)
+ [Ignacio Sambade](http://github.com/nsamt)

_Each name is linked to its respective GitHub account._

## Technologies used
**Backend:**
+ NestJS.
+ MySQL.
+ MomentJS.

**Frontend:**
+ React with Typescript.
+ Tailwind.
+ Shadcn.
+ ECharts.

**Common tools:**
+ VSCode.

## How to make use of the platform

The platform is deployed, meaning that clicking here will lead you its website, allowing you to make use of the app.

If you prefer to use it locally, you can download this GitHub repository, by using Git Clone or downloading the compressed .zip repository, then you will need to have npm or pnpm installed. If you already have pnpm installed you may skip to **Dependencies installation** step.

To install pnpm on Windows systems, you may run the following code:

``
iwr https://get.pnpm.io/install.ps1 -useb | iex
``

On Linux/MacOS systems: 

``
wget -qO- https://get.pnpm.io/install.sh | sh -
``

### Dependencies installation

Once pnpm installed, dependencies must be installed before running the app for the first time. This step is installation related, and will not be necessary to excecute in the future.

In order to do so, two terminals must be opened. One pointing to the client folder, and another one pointing to the server folder. Usually this can be done by opening the folder, right clicking on an empty space in the folder and clicking *Open terminal*. In both terminals, the following command must be run:

``
pnpm install
``

Once depencencies are installed, you will need to run both the backend and frontend of the app. For this step, we will also need two terminals, one pointing to the *client* folder and another one pointing to the *server* folder. If you have just installed dependencies, these terminals will work. If not, you will need to open them again.

In the **server** terminal, run:

``
pnpm start
``

In the **client** terminal, run:

``
pnpm run dev
``

Then, visiting http://localhost:5173/ in your web browser will display the app's graphic interface.

The app's database is cloud hosted, so there is no need to download it nor install it.

## Usage
For the time being, the app is only available in Catalan.

A first glimpse of the app shows a dashboard containing empty graphics and an empty data table, the latter resembling a spreadsheet.

This data table is the app's core. Clicking **Filtre per data** (_Filter by date_) will load events using the chosen date filters. You may test the app by clicking the **Sel·lecció** (_Select_) dropdown and choosing **Todos los eventos** (_all events_). This action will activate the graphics with the data being shown in the table.

You may also use the rest of the filters such as, **Cerca títol** (_Search by title_), **Cerca temàtica** (_Search by theme_), **Cerca tipus d'activitat** (_Search by event type_) and search by date range.

Clicking a specific event will only prompt data related to this event. This will result in the **Temàtica** (_Theme_) and **Tipus d'activitat** (_Event type_) graphics not changing, given that these are global statistics and not individual.

A Form is also available to manually enter data from events. This data will be stored in the app's database, making it automatically available in the data table, and therefore, part of the statistics.

The **Descarrega** (_Download_) button will download the events information in .XSLX format.

The **Carrega** (_Upload_) allows .XSLX and .CSV files to be uploaded and included to the app's database. Please note that these files **must** follow the data table structure. In future versions of the app, import of Decidim's meetings .CSV might be implemented.
