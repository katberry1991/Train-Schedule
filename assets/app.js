<!DOCTYPE html>
<head>
	<title>Train Table</title>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-2.2.1.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
	<!-- Firebase Reference -->
	<script src="https://cdn.firebase.com/js/client/2.4.1/firebase.js"></script>

</head>
<body>
	<div class="container">
		<div class="jumbotron">
			<h1 class="text-center">Train Schedule</h1>
			<h3 class="text-center">Train Station</h3>
		</div>

		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

			<!-- Current Trains -->
				<div class="panel panel-primary">
					<div class="panel-heading">
						<h3 class="panel-title"><strong>Current Train</strong></h3>
					</div>
					<div class="panel-body">
						<table class="table table-hover" id='trainTable'>
							<thead>
								<tr>
									<th>Train Name</th>
									<th>Line</th>
									<th>Destination</th>
									<th>Frequency</th>
									<th>Next Arrival</th>
									<th>Minutes Away</th>
								</tr>
							</thead>
							<tbody>
								
							</tbody>
						</table>
					</div>
				</div>

			<!-- Add New Trains -->
				<div class="panel panel-primary">
					<div class="panel-heading">
						<h3 class="panel-title"><strong>Add a New Train</strong></h3>
					</div>

					<div class="panel-body">
						<!-- Entry Form -->
						<form>
							<div class="form-group">
								<label for="">Train Name</label>
								<input type="text" class="form-control" id="trainNameInput">
							</div>

							<div class="form-group">
								<label for="">Line</label>
								<input type="text" class="form-control" id="lineInput">
							</div>

							<div class="form-group">
								<label for="">Destination</label>
								<input type="text" class="form-control" id="destinationInput">
							</div>

							<div class="form-group">
								<label for="">First Train Time (HH:mm - military time)</label>
								<input type="text" class="form-control" id="trainTimeInput">
							</div>

							<div class="form-group">
								<label for="">Frequency (min)</label>
								<input type="text" class="form-control" id="frequencyInput">
							</div>
							
							<button type="submit" class="btn btn-primary" id="addTrainBtn">Submit</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script src="assets/javascript/app.js"></script>
</body>
</html>